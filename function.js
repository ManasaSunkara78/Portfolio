function validateform()
{
    const name=document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message=document.getElementById('message').value.trim();

    if(!name || !email||!message)
    {
        alert("please fill out all fields");

    }
   
        return false;
    

}