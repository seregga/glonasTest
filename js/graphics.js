export { rendGraph };
const canvas1 = document.getElementById('canv1');
const canvas2 = document.getElementById('canv2');
const canvas3 = document.getElementById('canv3');

let ctx = canvas1.getContext('2d');
let ctx2 = canvas2.getContext('2d');
let ctx3 = canvas3.getContext('2d');
createGraph(canvas1, ctx, 'table-1')
createGraph(canvas2, ctx2, 'table-2')
createGraph(canvas3, ctx3, 'table-3')

function createGraph(numCanvas, ctx, tableNum) {

    ctx.beginPath();
    ctx.font = "12px sans-serif";
    ctx.fillText(tableNum, 260, 10);
    ctx.font = "8px sans-serif";
    ctx.fillText("14", 2, 10);
    ctx.fillText("13", 2, 20);
    ctx.fillText("12", 2, 30);
    ctx.fillText("11", 2, 40);
    ctx.fillText("10", 2, 50);
    ctx.fillText("9", 2, 60);
    ctx.fillText("8", 2, 70);
    ctx.fillText("7", 2, 80);
    ctx.fillText("6", 2, 90);
    ctx.fillText("5", 2, 100);
    ctx.fillText("4", 2, 110);
    ctx.fillText("3", 2, 120);
    ctx.fillText("2", 2, 130);
    ctx.fillText("1", 2, 140);
    ctx.translate(0, numCanvas.height);
    ctx.scale(1, -1);
    ctx.strokeStyle = 'red';
}

function rendGraph(arrTdTable1, arrTdTable2, arrTdTable3) {

    ctx.moveTo(0, 0);
    ctx2.moveTo(0, 0);
    ctx3.moveTo(0, 0);

    for (let i = 0; i < arrTdTable1.length; i += 2) {
        ctx.lineTo((Number(arrTdTable1[i].textContent)), (Number(arrTdTable1[i + 1].textContent)))
        ctx.stroke();
    }
    for (let i = 0; i < arrTdTable2.length; i += 2) {
        ctx2.lineTo((Number(arrTdTable2[i].textContent)), (Number(arrTdTable2[i + 1].textContent)))
        ctx2.stroke();
    }
    for (let i = 0; i < arrTdTable3.length; i += 2) {
        ctx3.lineTo((Number(arrTdTable3[i].textContent)), (Number(arrTdTable3[i + 1].textContent)))
        ctx3.stroke();
    }

}


