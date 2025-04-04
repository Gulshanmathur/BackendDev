const asyncHandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch(err => next(err))
    }
}

module.exports = asyncHandler;

// or

/*
const asyncHandler = (func) => async (req, res, next) => {
    try {
      // Call the passed function and wait for it to finish
      await func(req, res, next);
    } catch (error) {
      // Pass any errors to the next middleware (error handler)
      next(error);
    }
  };

  */