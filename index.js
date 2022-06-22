const comment = ()=>{
    const like = document.querySelectorAll('.comment-like');
    for(let i = 0; i< like.length; i++){
        like[i].addEventListener('click',()=>{
            if(like[i].querySelector('p').style.color == "blue"){
                like[i].querySelector('p').style.color = "black"
            }else{
                like[i].querySelector('p').style.color = "blue"
            }

        });
    }
}

const editComment=()=>{
    const comment = document.querySelectorAll('.comment-container');
    for(let i = 0; i< comment.length; i++){
        comment[i].addEventListener('click', ()=>{
        console.log(comment[i].querySelector('p'));
            const text = prompt("Que texto quieres agregar?");
            comment[i].querySelector('p').textContent = text;
        })
    }
}
editComment();
comment();