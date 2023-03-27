import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const radioRef1 = useRef();
  const radioRef2 = useRef();
  const radioRef3 = useRef();
  const radioRef4 = useRef();
const selectRef = useRef()
const fullFilmRef = useRef()
const highlightRef = useRef()
const socialRef = useRef()
const featureFilmRef = useRef()
const totalRef =useRef()

const [total, setTotal] = useState(0);
const [disconect, setDisconect] = useState(0);
const [discount, setDiscount] = useState(0);
  const handleSubmit = (evt) =>{
evt.preventDefault();

}


const handleChange = ()=>{
  const el1 =fullFilmRef?.current?.checked
  const el2 =highlightRef?.current?.checked
  const el3 =socialRef?.current?.checked
  const el4 =featureFilmRef?.current?.checked
  const r1 =radioRef1?.current
  const r2 =radioRef2?.current
  const r3=radioRef3?.current
  const r4 =radioRef4?.current
  const elTotal =totalRef?.current
 
  



  setTotal()
  // bittasi checked bolsa
  if(el1){
    setTotal(140)
  }else if(el2){
    setTotal(120)
  }else if(el3){
    setTotal(80)
  }else if(el4){
    setTotal(100)
  }
   else{
    setTotal()
  }
  // iktasi checked bolsa
    if(el1 && el2 ){
    setDisconect(220)
    setDiscount(40)
setTotal(250)
  }else  if(el1 && el3 ){
    setDisconect(200)
    setDiscount(40)
setTotal(160)
  }else  if(el1 && el4 ){
    setDisconect(220)
    setDiscount(40)
setTotal(180)
  }else  if(el2 && el3 ){
    setDisconect(180)
    setDiscount(30)
setTotal(150)
  }else  if(el2 && el4 ){
    setDisconect(200)
    setDiscount(40)
setTotal(160)
  }else  if(el3 && el4 ){
    setDisconect(180)
    setDiscount(30)
setTotal(150)
  }
  // uchtasi checked bolsa

  if(el1 && el2 && el3){
    setDisconect(300)
    setDiscount(80)
setTotal(230)
  }else if(el1 && el2 && el4){
    setDisconect(320)
    setDiscount(80)
setTotal(240)
  }else if(el1 && el3 && el4){
    setDisconect(300)
    setDiscount(50)
setTotal(250)
  }else if(el3 && el2 && el4){
    setDisconect(280)
    setDiscount(70)
setTotal(210)
  }
  // torttasi checked bolsa

  if(el1 && el2 && el3 && el4){
    setDisconect(400)
    setDiscount(120)
setTotal(280)
  }


   // Change radio  style 
   if(r2?.checked){
    r1.parentElement?.classList.remove("selectedType")
    r2.parentElement?.classList.add("selectedType")
  
  }else if(r1?.checked){
    r2.parentElement?.classList.remove("selectedType")
    r1.parentElement?.classList.add("selectedType")
  } 
  if(r4?.checked){
    r3.parentElement?.classList.remove("selectedType")
    r4.parentElement?.classList.add("selectedType")
  }else if(r3?.checked){
    r4.parentElement?.classList.remove("selectedType")
    r3.parentElement?.classList.add("selectedType")
  } 
 
  if(r2.checked ){
    setDisconect(disconect > 0 ? (disconect - 40) : 0)
    setDiscount(discount > 0 ? (discount - 10) : 0)
    setTotal(total - 30)
  }else if(r4.checked){
    setDisconect(disconect > 0 ? (disconect + 40) : 0)
    setDiscount(discount > 0 ? (discount + 10) : 0)
    setTotal(total + 30)
  }
  // select 
  let elIndex = selectRef.current?.options?.selectedIndex

  if(elIndex === 1){
      setDisconect(disconect > 0 ? (disconect + 60) : 0)
      setDiscount(discount > 0 ? (discount + 20) : 0)
      setTotal(total + 40)
     } else if(elIndex === 2){
      setDisconect(disconect > 0 ? (disconect + 110) : 0)
      setDiscount(discount > 0 ? (discount + 30) : 0)
        setTotal(total + 80)
      }else if(elIndex === 3){
        setDisconect(disconect > 0 ? (disconect + 200) : 0)
        setDiscount(discount > 0 ? (discount + 50) : 0)
        setTotal(total + 180)
      }
}
	return (
		<div className='App'>
    <Header />
			<div className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
			{/* PriceCalculator */}
				<h1 className='text-center font-normal'>
					<span className='font-bold m-1'>Price</span> Calculator
				</h1>
				<div className='line'></div>

				<form onChange={handleChange} id='weddingCalc ' action="https://echo.htmlacademy.ru/" className=' border  p-4 border-gray-300 mt-4' onSubmit={handleSubmit}>
					<div className='border border-gray-300 p-2  '>
						Event type:
						<div className='my-2'>
							<label
              
                htmlFor='wedding'
								className='typeLabel selectedType '
								id='labWedd'
							>
								Wedding
								<input

                ref={radioRef1}
									type='radio'
									name='type'
									id='wedding'
									defaultValue='wedding'
									className='form-check-input'
									defaultChecked
								/>
							</label>
							<label htmlFor='bm' className='typeLabel ' id='labBM' >
								Bar Mitzvah
								<input
                ref={radioRef2}
               
									type='radio'
									name='type'
									id='bm'
									defaultValue='bm'
									className='form-check-input'
								/>
							</label>
						</div>
					</div>
					<p></p>
					<table className='checkTable border p-2  border-gray-300 my-3'>
						<tbody  >
							<tr className='border p-2  border-gray-300'>
								<td className=' w-10 px-3.5 border p-2  border-gray-300'>
									<input
                  ref={fullFilmRef}
                 
										type='checkbox'
										id='fullFilm'
										className='form-check-input'
									/>
								</td>
								<td>
									<label htmlFor='fullFilm' className='w-100 p-2'>
										Full film <span className='text-xs'>(1-3 hours)</span>
									</label>
								</td>
							</tr>
							<tr className='border p-2  border-gray-300'>
								<td className=' w-10 px-3.5 border p-2  border-gray-300'>
									<input
                  ref={highlightRef}
										type='checkbox'
										id='highlight'
										className='form-check-input'
									/>
								</td>
								<td>
									<label htmlFor='highlight' className='w-100 p-2'>
										Highlight <span className='text-xs'>(5-7 minutes)</span>
									</label>
								</td>
							</tr>
							<tr className='border p-2  border-gray-300'>
								<td className=' w-10 px-3.5 border p-2  border-gray-300'>
									<input
                  ref={socialRef}
										type='checkbox'
										id='social'
										className='form-check-input'
									/>
								</td>
								<td>
									<label htmlFor='social' className='w-100 p-2'>
										Social film <span className='text-xs'>(1-2 minutes)</span>{' '}
									</label>
								</td>
							</tr>
							<tr className='border p-2  border-gray-300'>
								<td className=' w-10 px-3.5 border p-2  border-gray-300'>
									<input
                  ref={featureFilmRef}
										type='checkbox'
										id='featureFilm'
										className='form-check-input'
									/>
								</td>
								<td>
									<label htmlFor='featureFilm' className='w-100 p-2'>
										Feature film{' '}
										<span className='text-xs'>(10-30 minutes)</span>
									</label>
								</td>
							</tr>
						</tbody>
					</table>
					
					<div className='border p-2  border-gray-300'>
						Video resolution:
						<div className='my-2'>
							<label
								htmlFor='fullhd'
								className='typeLabel selectedType '
								id='labfullhd'
							>
								Full HD <span className='font-smaller'>(1080p)</span>
								<input
                ref={radioRef3}
									type='radio'
									id='fullhd'
									name='res'
									className='form-check-input'
									defaultChecked
								/>
							</label>
							<label htmlFor='fourk' className='typeLabel' id='labfourk'>
								4K <span className='font-smaller'>(2160p)</span>
								<input
                ref={radioRef4}
									type='radio'
									id='fourk'
									name='res'
									className='form-check-input'
								/>
							</label>
						</div>
					</div>
					<div className='  my-2 border p-2  border-gray-300'>
						<label htmlFor>How many cameras worked? </label>
						<select name='camera' id='camera' className='form-select' ref={selectRef}>
							<option  defaultValue={1}>1 Camera</option>
							<option defaultValue={2}>2 Camera</option>
							<option defaultValue={3}>3 Camera</option>
							<option defaultValue={4}>4 Camera</option>
						</select>
					</div>
					<div className='flex justify-between items-center flex-wrap'>
					<div>
          <p id='totalPrice'></p>
   {total > 0 ? (<>	<p  className='text-sm text-red-600 discountAnimation' id='subtot'>
							Without discount: $<del>{disconect}</del>
						</p>
						<p
           
							className='text-sm text-green-400 discountAnimation my-1'
							id='disPrice'
						>
							Discount ${discount}
						</p></>) : ""}
						<p ref={totalRef} className='text-blue-900 font-bold totPrice' id='totPrice'>
							Total: ${total}
						</p>
          </div>
						
						<button
            type='submit'
							id='order'
							className='py-2 px-4  bg-violet-700 text-white font-semibold rounded-lg shadow-md hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75'
						>
							Order Now
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
