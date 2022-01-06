const articlesSection = document.querySelector("#articles");

var renderComment = async () => {
    let uri = '/data';
    const res = await fetch(uri);
    const comments = await res.json();
    
    console.log(comments.articles);
    console.log(articlesSection);

    let template = '';

    for(i in comments.articles)
    {
        
    template += `
    <div class="card">
    <h4 class="title"> ${comments.articles[i].title} </h4>
    <p> 
    ${comments.articles[i].body}
    </p>
    <div class="messageDiv">
        <form>
            <input name="id" type="hidden" value="${i}"> 
            <label for="name"> UserName: </label>
            <input type="text" name="name" class="inline" placeholder="username">
            <label for="message">comment:</label>
            <textarea name="message"  class="inline" placeholder="comment here"> </textarea>
            <input type="submit" id="submit-ms" class="inline" value="send">
        </form>
    </div> 
    <div class="comments">`

    for(y in comments.articles[i].comments)
    {
        console.log(comments.articles[i].comments[y].title)
        template+=`
                <div class="comment">
                    <h5>${comments.articles[i].comments[y].title}</h5>
                    <p> ${comments.articles[i].comments[y].body}</p>
                </div>`
    }   

    template+= `
    </div>
    </div>`


}

articlesSection.innerHTML = template;


}

document.addEventListener('submit' ,async (event) => {
    event.preventDefault();
    await fetch('/data' , {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });  
    renderComment()
});



window.addEventListener('DOMContentLoaded', () => renderComment());