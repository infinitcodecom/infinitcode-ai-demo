exports.validateItem = (req, res, next) => {
  const { name, description } = req.body;
  const errors = [];
  
  if (!name) errors.push('Name is required');
  if (!description) errors.push('Description is required');
  if (name && name.length > 100) errors.push('Name must be less than 100 characters');
  
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  
  next();
};