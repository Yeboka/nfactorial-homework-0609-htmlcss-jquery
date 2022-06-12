$('document').ready(function() {
    $('#madlibs').on('click', function(e) {
        e.preventDefault();
        $('.box').empty();
        var classMad = `<div class="container d-flex align-items-center mad">
        <h3>Mad Libs</h3>
        <div class="inputs">
            <form>
                <div class="form-group mt-2">
                  <label for="formGroupExampleInput">Person name</label>
                  <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group mt-2">
                  <label for="formGroupExampleInput2">Character</label>
                  <input type="text" class="form-control" id="character">
                </div>
                <div class="form-group mt-2">
                    <label for="formGroupExampleInput2">Adverb</label>
                    <input type="text" class="form-control" id="adverb">
                  </div>
                  <div class="form-group mt-2">
                    <label for="formGroupExampleInput2">Adjective</label>
                    <input type="text" class="form-control" id="adjective">
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">Tell Story</button>
            </form>
            </div>
         </div>`;
        
        $('.box').append(classMad);

        $('button').on('click', function() {
            var pName = $('#name').val();
            var character = $('#character').val();
            var adv = $('#adverb').val();
            var adj = $('#adjective').val();

            var story = `One day, my friend ${pName} was visiting New York and ran
            into ${character}. ${pName} ran ${adv} to meet ${character}. But
            ${character} turned out to be very ${adj} and ${pName} did not
            enjoy the meeting.`

            var storyBlock = `<div class="story">
            <h3>Wendy's Crazy MadLibs Story</h3>
            <p >${story}</p>
            </div>`
            $('.story').empty();
            $('.mad').append(storyBlock);
        })
    })

    $('#tomthumb').on('click', function(e) {
        e.preventDefault();
        $('.box').empty();
        var classTom = `<div class="container d-flex align-items-center mad">
        <h3>Tom Thumb</h3>
        <div class="inputs">
        <form>
            <div class="form-group mt-2">
                <label for="formGroupExampleInput">Image width(px)</label>
                <input type="text" class="form-control" id="width">
            </div>
            <div class="form-group mt-2">
                <label for="formGroupExampleInput2">Image height(px)</label>
                <input type="text" class="form-control" id="height">
            </div>
            <div class="form-group mt-2">
                <label for="formGroupExampleInput2">Number of colors</label>
                <input type="text" class="form-control" id="colors">
            </div>
            <button type="submit" class="btn btn-primary mt-2">Calculate File Size</button>
        </form>

     </div>
    </div>`

         $('.box').append(classTom);

         $('button').on('click', function() {
            var w = $('#width').val();
            var h = $('#height').val();
            var c = $('#colors').val();
           
            let res = ((w*c*h)/Math.pow(2, c)/1000).toFixed(1);
            console.log(res);
        
            var storyBlock = `<div class="story">
            <p >File is ${res} KB wich is OK</p>
            </div>`
            $('.story').empty();
            $('.mad').append(storyBlock);
            
        })
    })

    $('#home').on('click', function(e) {
        e.preventDefault();
        var emptyBox = `<div class="container d-flex align-items-center mad">Home</div>`
        $('.box').empty();
        $('.box').append(emptyBox);

        
    })

}); 

