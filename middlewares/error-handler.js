module.exports = (err, req, res, next) => {
    // set locals, only providing error in development
    console.log(Object.getOwnPropertyNames(err));
    res.locals.message = err.message;
    res.locals.error =  err.stack;
    console.log(res.locals);

    // res.send({
    //     'error': res.locals
    // });
    // render the error page
    res.status(err.status || 500).json(res.locals);
}