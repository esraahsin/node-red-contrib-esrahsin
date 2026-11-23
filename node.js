
module.exports = function(RED) {

    function EsrahsinNode(config) {

        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {

            msg.payload = "Esrahsin";
            node.send(msg);

        });
    }

    RED.nodes.registerType("esrahsin", EsrahsinNode);

}
