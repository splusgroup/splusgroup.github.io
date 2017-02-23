var x = false;
var y = false;
$(document).ready(function(){
	$("#nextButton").click(function(){
		if(x){
			First();
		}
		else{
			Second();
		}
		x =! x;
	});
	$("#language").click(function() {
		if(y){
			Chinese();
		}
		else{
			English();
		}
		y =! y;
	})
	
	function Chinese(){
		$("#text").text("積極的退休生活方式應該在時間安全和可持續的家裡改善。");
		$("#text").css("font-size", "40px");
		$("#text").css("text-indent", "0");
		$("#bottomScript").text("老化就地解決方案為您的家。 重新定義。");
		$("#language").text("English");
	}
	
	function English(){
			$("#text").html("<span style='color:#606060; font-size: 40px; text-align: left; float: left;'><strong><br/>An active retirement lifestyle should improve with time - <span style='color: #BFBFBF'>safe </span> and <span style='color: #BFBFBF'>sustainable </span> at <span style='color: #F79646'>home</span>.</strong></span>");
			$("#text").css("font-size", "40px");
			$("#text").css("text-indent", "0");
		$("#bottomScript").html("<span style='color: ; text-align: right; float: right; font-size: 20px;'>Aging in place solutions for your home.  Redefined.  </span></div>")
		$("#language").text("中文")
	}
	
	function First(){
			$("#text").html("<span>Your comfort is our passion.  Especially in the home - your home.  We put people first in everything we do to deliver an enhanced day-to-day living experience for elder residents by creating the best lifestyle possible within the familiarity of your own home.  Our goal - provide the choice for active elders to enjoy the personal responsibility of living at home while savoring independence, enhanced well being and improved quality of life with a specially equipped home.   We continuously work to know more about the needs of elder residents and how they want to live and bring those solutions to your door; for today and the future.</span><br /><br /><br/><br/> <a href='discussion.html' style='float: right'>Discussion Page</a>");
			$("#text").css("font-size", "20px");
			$("#text").css("text-indent", "50px");
			$("#bottomScript").hide();
			$("#nextButton").text("Return");
			
	}
	function Second(){
			$("#text").html("<span style='color:#606060; font-size: 40px; text-align: left; float: left;'><strong><br/>An active retirement lifestyle should improve with time - <span style='color: #BFBFBF'>safe </span> and <span style='color: #BFBFBF'>sustainable </span> at <span style='color: #F79646'>home</span>.</strong></span>");
			$("#text").css("font-size", "40px");
			$("#text").css("text-indent", "0");
			$("#bottomScript").show();
			$("#nextButton").text("Next");
	}
})

