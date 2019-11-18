function wait (time)
{
    new Promise(function(resolve, reject)
    {   
        setTimeout(resolve, time)
    })
