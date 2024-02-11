import React from 'react'
import Home from './Home'

const images = [
   {imgurl: "https://media.istockphoto.com/id/505514996/photo/red-roses-in-the-field.jpg?s=612x612&w=0&k=20&c=vP4VJNTAFEuLoFNe1AYMlPnEGi0TQ8EPMadA_NSq38Y=", title:"Roses", des:"Rose Day"},
   {imgurl: "https://www.thespruceeats.com/thmb/FhHcgQni8lgV0griUeDJMTAszxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg", title:"Chocolate", des:"Chocolate Day"},
   {imgurl: "https://media.istockphoto.com/id/1332455278/photo/smiling-white-light-brown-and-dark-brown-teddy-bears-sitting-on-table-at-pink-wall-background.jpg?s=612x612&w=0&k=20&c=vt3NvcLmXOFQQdbp_9_V3ZVlC1Dd47OFk4UEbgDd750=", title:"Teddy", des:"Teddy Day"},
   {imgurl: "https://images.herzindagi.info/image/2024/Feb/propose-day-2024-wishes-messages.jpg", title:"propose", des:"Loving you has made me become a better person. I want to grow old with you. Happy Propose Day!"},
  ];

  const Sapthapadi =[
    {Numbber:"1",imgurl:"https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/wdng_041023_1.jpg",meaning:" We will fulfill our duties and responsibilities to each other and to our community, and look after each other’s (and our children’s) health."},
    {Numbber:"2",imgurl:"https://d8evzn3g25q98.cloudfront.net/saptapadi.jpg",meaning:" We will get richer and be more comfortable in legal and moral ways."},
    {Numbber:"3",imgurl:"https://images.squarespace-cdn.com/content/v1/544f2a32e4b0de490d4c3a3c/1607754824176-HMGOUIHEM1FJ3TWPMGPJ/saptapadi?format=1500w",meaning:" We will improve on ourselves spiritually and mentally."},
    {Numbber:"4",imgurl:"https://lh3.googleusercontent.com/proxy/YXCRKYEwD39RxYDWAIlimwsh4-zt_cUFqYxBMxeHvVLFES-iMVsBkl6e0FW7zhXNnUGMJy4vAY7_S_rKAbx7NuudIQJ6EsNCcuLQeskP4dotx3a1NbLzik0jIPyWpme188FLC2htIOny-VzigIgv4g",meaning:" We will become wiser, happier and more united by loving each other and having mutual trust and respect for each other."},
    {Numbber:"5",imgurl:"https://www.reigntogether.com/cdn/shop/articles/how-to-be-supportive-in-a-relationship.jpg?v=1576870612",meaning:" Our family will be blessed with strong, moral and heroic children."},
    {Numbber:"6",imgurl:"https://cdn.cdnparenting.com/articles/2018/12/02141155/554623639-H-1024x700.jpg",meaning:" We will be blessed with long life."},
    {Numbber:"7",imgurl:"https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=",meaning:" We will forever remain true to our vows and stay faithful to one another."},]

const Slider = () => {
  return (
    <Home images={Sapthapadi}/>
  )
}

export default Slider
