
export  function isEmptyObject(value) {
	// Check if the value is an object
	if (typeof value === 'object' && value !== null) {
	  // Check if the object has any own properties
	  return Object.keys(value).length === 0;
	}
	// Return false if the value is not an object or is null/undefined
	return false;
  }