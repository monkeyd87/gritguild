export default  async function get (req, res) {
    console.log(res)
    res.status(200).json({ message: 'Hello from Next.js!' })
  }
