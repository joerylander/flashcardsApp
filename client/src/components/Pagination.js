import Buttons from './Buttons'

const Pagination = ({ buttonAction, page }) => {
  const {currPage, maxPages } = page;

  return (
    <>
     <p className="pagination-pages">{`${currPage} / ${maxPages}`}</p>
     <div className='pagination-container'>
      {/* <Buttons classes='previous' buttonAction={buttonAction} text={<i className="fa fa-angle-left"></i>}/>
      <Buttons classes='next' buttonAction={buttonAction} text={<i className="fa fa-angle-right"></i>}/>
      <Buttons classes='random' buttonAction={buttonAction} text={<i className="fas fa-random"></i>} /> */}
      <Buttons classes='previous' buttonAction={buttonAction} text='Previous'/>
      <Buttons classes='next' buttonAction={buttonAction} text='Next'/>
      <Buttons classes='random' buttonAction={buttonAction} text='Random'/>
    </div>
    </>
  )
};

export default Pagination;