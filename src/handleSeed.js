function handleSeed()
{
    if (typeof handleSeed.i == 'undefined')
    {
        handleSeed.i = 0
    }
    else
    {
        ++handleSeed.i
    }

    console.log(handleSeed.i)
    return handleSeed.i.toString(10)
}

module.exports = handleSeed