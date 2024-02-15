import React from 'react'

function Testimonial() {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard name={"Someone"} feedback="Your website developing skills are decent"/>
        <TestimonialCard name={"Elon musk"} feedback="Plz optimize my X"/>
        <TestimonialCard name={"Mark Zuckerberg"} feedback="Plz make my facebook app more better"/>
      </section>
    </div>
  )
}

const TestimonialCard=({name,feedback})=>(
<article>
<img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
  <font>{name}</font>
  <p>{feedback}</p>
</article>

)
export default Testimonial