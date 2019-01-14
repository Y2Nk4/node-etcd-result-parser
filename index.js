let collect = require('collect.js');

module.exports = EtcdResultParser;

let defaultOptions = {
    isUseCollect: false,
};

function EtcdResultParser(result, options){
    let _options = (!!options) ? collect(defaultOptions).merge(options).all() : defaultOptions;

    let _parsedResult = _parser(result.node, options);

    return (!!_options.isUseCollect) ? collect(_parsedResult) : _parsedResult;
}

function _parser(node, options) {
    if(node.dir){
        if(!node.nodes){
            return {};
        }
        return collect(node.nodes).mapWithKeys((item) => {
            if(item.key){
                let key = item.key.split('/').pop();
                if(item.dir){
                    return [key, _parser(item, options)];
                }else{
                    return [key, item.value];
                }
            }else{
                return null;
            }
        }).all();
    }else{
        if(!node.key){
            return null;
        }else{
            return node.value;
        }
    }
}