import Contact from '../../assets/contact.png';

const Contacts = () => {
  return (
    <form>
      <h2 className="text-dark-emphasis">Contact me</h2>
      <div className='d-flex'>
        <div className='text-end col-6'>
          <img src={Contact} className="img-fluid rounded-4" alt="Beks photo" />
        </div>
        <div className='col-6 ms-5'>
          <h3>Send me message</h3>
          <div className='mb-3'>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' className='form-control' style={{width: 350}}/>
          </div>
          <div className='mb-3'>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' className='form-control' style={{width: 350}}/>
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea className='form-control' style={{width: 350}}></textarea>
          </div>
          <button className='btn btn-dark mt-2'>Send</button>
        </div>
      </div>
    </form>
  );
};

export default Contacts;