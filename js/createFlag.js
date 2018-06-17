$(document).ready(function(){
                var outlineColor = fillColor;
                var fillColor = "#cc0000";
                var bannerColor = "#FFFFFF";
                var triangleColor = "#fdff00";
                var textColor = triangleColor;
                
                var char1 = "随";
                var char2 = "心";
                var char3 = "常";
                var char4 = "樂";
                var StringText= "Edward Rees    HKIS   2004-2018";

            
                var c = document.getElementById("flag");
                var ctx = c.getContext("2d");
                var height = 576;
                var width = 1024;
                var center = 80;
                var start = 40;
                var color = "#8064bd"
                ctx.scale(0.5,0.5)
                ctx.fillRect(start, start, width-center, height-center+30);
              
                ctx.scale(0.85,0.85);
                
                ctx.beginPath();
                ctx.fillStyle=fillColor;
                ctx.moveTo(center, center);
                ctx.lineTo(center, height-center);
                ctx.strokeStyle=outlineColor;
                ctx.moveTo(center,height-center);
                ctx.lineTo(width-center, height-center);
                ctx.lineTo(center, center);
                ctx.fill();
            
                ctx.stroke();
                
                ctx.closePath();
                
                ctx.beginPath();
                
                ctx.strokeStyle=triangleColor;
                ctx.fillStyle=triangleColor;
                ctx.moveTo(center+20,center+10);
                ctx.lineTo(center+150, center+10);
                ctx.lineTo((center+45)*Math.sqrt(2), center+48);
                ctx.lineTo(center+20, center+10)
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+45)*Math.sqrt(2), center+48);
                ctx.lineTo(center+240, center+48);
                ctx.lineTo((center+176), center+85);
                ctx.lineTo((center+45)*Math.sqrt(2), center+48);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+176), center+85);
                ctx.lineTo((center+200)*Math.sqrt(2), center+85);
                ctx.lineTo((center+248), center+120);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+248), center+120);
                ctx.lineTo(center+400, center+120);
                ctx.lineTo((center+205)*Math.sqrt(2), center+156)
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+205)*Math.sqrt(2), center+156);
                ctx.lineTo(center+490, center+156);
                ctx.lineTo((center+415), center+200);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+415, center+200);
                ctx.lineTo(center+570, center+200);
                ctx.lineTo((center+330)*Math.sqrt(2), center+241);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+330)*Math.sqrt(2), center+241);
                ctx.lineTo(center+660, center+241);
                ctx.lineTo(center+587, center+285);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+587, center+285);
                ctx.lineTo(center+750, center+285);
                ctx.lineTo((center+450)*Math.sqrt(2), center+325);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+450)*Math.sqrt(2), center+325);
                ctx.lineTo(center+840, center+325);
                ctx.lineTo((center+520)*Math.sqrt(2), center+371);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo((center+520)*Math.sqrt(2), center+371);
                ctx.lineTo(center+900, center+371);
                ctx.lineTo((center+865), center+420);
                ctx.fill();
                ctx.stroke();
                
                ctx.closePath();
                
                ctx.beginPath();
                ctx.strokeStyle=triangleColor;
                ctx.fillStyle=triangleColor;
                var end = height-center-1;
                
                ctx.moveTo(center, end);
                ctx.lineTo((center+120), end+45);
                ctx.lineTo(center+120, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+120, end);
                ctx.lineTo(center+240, end+45);
                ctx.lineTo(center+240, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+240, end);
                ctx.lineTo(center+360, end+45);
                ctx.lineTo(center+360, end);
                ctx.fill();
                ctx.stroke();
                
                
                ctx.moveTo(center+360, end);
                ctx.lineTo(center+480, end+45);
                ctx.lineTo(center+480, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+480, end);
                ctx.lineTo(center+600, end+45);
                ctx.lineTo(center+600, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+600, end);
                ctx.lineTo(center+730, end+45);
                ctx.lineTo(center+730, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(center+730, end);
                ctx.lineTo(center+865, end+45);
                ctx.lineTo(center+865, end);
                ctx.fill();
                ctx.stroke();
                
                ctx.moveTo(width-center, end);
                ctx.lineTo(width-center+100, end);
                ctx.lineTo(width-center+100, end+50);
                ctx.lineTo(width-center,end);
                ctx.fill();
                ctx.stroke();
                
                ctx.closePath();
                
                ctx.fillStyle=bannerColor;
                ctx.fillRect(center,center,30, height-center-center+20);
                
                ctx.fillStyle=triangleColor;
                ctx.fillRect(center+70, end-85, 100,75)

                
                ctx.scale(6,6);
                ctx.fillStyle=textColor;
                ctx.fillText(char1, center-50, center-40);
                ctx.fillText(char2, center-28, center-28);
                ctx.fillText(char3, center-6, center-18);
                ctx.fillText(char4, center+18, center-8);
                
                ctx.scale(1/6,1/6);
                ctx.scale(4,4)
                ctx.fillStyle="#3c6074";
                
                ctx.fillText("Flag", center-40, center+34)
                
                ctx.scale(1/4,1/4);
                ctx.scale(3,3);
                ctx.fillStyle=textColor;
                
                ctx.fillText(StringText, center+25, center+80)
})