
export default function validationHelper(validationRes, message, error, res) {
  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: message,
      error: error
    })
  }
} 