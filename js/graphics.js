export { rendGraph };
const canvas1 = document.getElementById('canv1');
const canvas2 = document.getElementById('canv2');
const canvas3 = document.getElementById('canv3');


let ctx = canvas1.getContext('2d');
ctx.beginPath();
ctx.font = "12px sans-serif";
ctx.fillText("table-1", 260, 10);
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
ctx.translate(0, canvas1.height);
ctx.scale(1, -1);
ctx.strokeStyle = 'red';


let ctx2 = canvas2.getContext('2d');
ctx2.beginPath();

ctx2.font = "12px sans-serif";
ctx2.fillText("table-2", 260, 10);
ctx2.font = "8px sans-serif";
ctx2.fillText("14", 2, 10);
ctx2.fillText("13", 2, 20);
ctx2.fillText("12", 2, 30);
ctx2.fillText("11", 2, 40);
ctx2.fillText("10", 2, 50);
ctx2.fillText("9", 2, 60);
ctx2.fillText("8", 2, 70);
ctx2.fillText("7", 2, 80);
ctx2.fillText("6", 2, 90);
ctx2.fillText("5", 2, 100);
ctx2.fillText("4", 2, 110);
ctx2.fillText("3", 2, 120);
ctx2.fillText("2", 2, 130);
ctx2.fillText("1", 2, 140);
ctx2.translate(0, canvas2.height);
ctx2.scale(1, -1);
ctx2.strokeStyle = 'red';

let ctx3 = canvas3.getContext('2d');
ctx3.beginPath();
ctx3.font = "12px sans-serif";
ctx3.fillText("table-3", 260, 10);
ctx3.font = "8px sans-serif";
ctx3.fillText("14", 2, 10);
ctx3.fillText("13", 2, 20);
ctx3.fillText("12", 2, 30);
ctx3.fillText("11", 2, 40);
ctx3.fillText("10", 2, 50);
ctx3.fillText("9", 2, 60);
ctx3.fillText("8", 2, 70);
ctx3.fillText("7", 2, 80);
ctx3.fillText("6", 2, 90);
ctx3.fillText("5", 2, 100);
ctx3.fillText("4", 2, 110);
ctx3.fillText("3", 2, 120);
ctx3.fillText("2", 2, 130);
ctx3.fillText("1", 2, 140);
ctx3.translate(0, canvas3.height);
ctx3.scale(1, -1);
ctx3.strokeStyle = 'red';

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




