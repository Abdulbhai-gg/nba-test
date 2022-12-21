let prom = prompt('Enter Value');


    let display = document.querySelector('#content')
    let i;
    for (i = 1; i <= prom; i++) {

        display.innerHTML += `
    <div class="block w-full rounded overflow-hidden shadow-md hover:shadow-lg mb-6 bg-white">
        <div class="px-4 py-5 flex flex-row items-center color-test" id="add">
            <!-- copybutton -->
            <button class="copybtn" id="copy`+ i + `" onclick="copy(`+ i + `)" >COPY</button>
            <!-- copybutton -->
            <div class="pl-4 w-full text-center"2
    <h3 class=" text-sm sm:text-xl mb-2" > CH.`+ i + ` </h3>
            </div>
             </div>
    </div>
    <br>`

        $('button').click(function () {
            $(this).css('backgroundColor', 'red')
        })
    }



function copy(cid){
    navigator.clipboard.writeText("http://www.cr7streams.ml/p/ncaab"+cid+".html");
 }




