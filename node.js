
module.exports = function(RED) {

    function EsraaNode(config) {

        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {

            msg.payload = "esra";

            node.send(msg);

        });
    }

    RED.nodes.registerType("esraa", EsraaNode);

}
