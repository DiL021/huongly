
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='K';
a[2]='h';
a[3]='ô';
a[4]='n';
a[5]='g';
a[6]=' ';
a[7]='c';
a[8]='ầ';
a[9]='n';
a[10]=' ';
a[11]='t';
a[12]='h';
a[13]='a';
a[14]='y';
a[15]=' ';
a[16]='đ';
a[17]='ổ';
a[18]='i';
a[19]=' ';
a[20]='g';
a[21]='ì';
a[22]=' ';
a[23]='đ';
a[24]='â';
a[25]='u';
a[26]=' ';
a[27]='h';
a[28]='ì';
a[29]='';
a[30]='';
a[31]=' ';
a[32]=' ';
a[33]=' ';
a[34]=' ';
a[35]=' ';
a[36]=' ';
a[37]=' ';
a[38]=' ';
a[39]=' ';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==29)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>YAY! Vậy là hết giận rùi nha<img src='https://i.imgur.com/HMX2Zfy.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ Dù gì mình cũng có lỗi thật, làm HL giận. Nhưng bỏ qua nha ><.<img src='http://website1gia.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Mốt chở lên TĐ ún 2land gần trọ, chịu hong <img src='https://i.imgur.com/OfgQ3o3.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				