function wait (time)
{
    new Promise(function(resolve, reject)
    {   
        setTimeout(resolve, time)
    })
}

wait(3000).then(function()
