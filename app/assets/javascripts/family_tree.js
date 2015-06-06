// // http://jsfiddle.net/86f4C/86/
// $(document).on('ready', function() {
//     var canvas = document.getElementById("canvas");
//     var ctx = canvas.getContext("2d");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     ctx.lineWidth = 3;

//     var $canvas = $("#canvas");
//     var canvasOffset = $canvas.offset();
//     var offsetX = canvasOffset.left;
//     var offsetY = canvasOffset.top;

//     var $0 = $("#0");
//     var $1 = $("#1");
//     var $2 = $("#2");
//     var $3 = $("#3");
//     var $0r = $("#0r");
//     var $1r = $("#1r");
//     var $2r = $("#2r");

//     var connectors = [];
//     connectors.push({
//         from: $0,
//         to: $0r
//     });
//     connectors.push({
//         from: $1,
//         to: $0r
//     });
//     // connectors.push({
//     //     from: $2,
//     //     to: $2r
//     // });

//     // connectors.push({
//     //     from: $3,
//     //     to: $2r
//     // });


//     var connect = function(connections) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for (var i = 0; i < connections.length; i++) {
//             var c = connections[i];
//             var eFrom = c.from;
//             var eTo = c.to;
//             var pos1 = eFrom.offset();
//             var pos2 = eTo.offset();
//             var size1 = eFrom.size();
//             var size2 = eTo.size();
//             ctx.beginPath();
//             ctx.moveTo(pos1.left + eFrom.width() + 3, pos1.top + eFrom.height() / 2);
//             ctx.lineTo(pos2.left + 5, pos2.top + eTo.height() / 2);
//             ctx.stroke();

//         }
//     }

//     connect(connectors);
// })
