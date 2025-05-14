const notFound = (req, res, next) => {
    res.status(404).json({ error: 'Route/page not found' });
  };

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
  };

module.exports = {notFound, errorHandler}