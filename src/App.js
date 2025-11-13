import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./restaurantBody.css";
import "./footer.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Navbar= ()=>{
    const navItems = [
        <span>Home<i className="ri-home-line"></i></span>,
        "Restaurants",
         <span>Offers<i className="ri-discount-percent-fill"></i></span>,
        <span><i className="ri-search-line"></i></span>,
        "Help",
        "Sign In",
        <span><i className="ri-shopping-cart-line"></i></span>
    
    ];


    return (
        <nav className="navbar"> 
        
            <div className="logo">
                <img src="https://t3.ftcdn.net/jpg/04/14/78/90/240_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg" alt="mr.food" />
            </div>
            <ul>
                    {
                        navItems.map((items,index)=>{
                            return(
                                <li key={index}><a href="#">{items}</a></li>
                            );

                        })
                    }
            </ul>
        </nav>
    );
}

const Heading=()=>{
    return(
        <header> <Navbar/> </header>
    );
}


//ResturantBody
//Search SearchBar
const SearchBar= ()=>{
    return(
        <div className="searchbar">
            <input type="text" name="" id="search" placeholder="search"/>
            
        </div>

    );
    
}
const Cards= ()=>{
            

const restaurants = [
    {
        restaurantName: "Spice Junction",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 20,
        location: "Mumbai, Maharashtra",
        cuisineType: "Indian",
        rating: 4.5,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Noodle House",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 15,
        location: "Bangalore, Karnataka",
        cuisineType: "Chinese",
        rating: 4.2,
        deliveryTime: "25 mins"
    },
    {
        restaurantName: "Pasta Paradise",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 10,
        location: "Delhi, NCR",
        cuisineType: "Italian",
        rating: 4.7,
        deliveryTime: "35 mins"
    },
    {
        restaurantName: "Punjabi Tadka",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 25,
        location: "Chandigarh, Punjab",
        cuisineType: "Punjabi",
        rating: 4.8,
        deliveryTime: "40 mins"
    },
    {
        restaurantName: "All Cuisines",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 5,
        location: "Hyderabad, Telangana",
        cuisineType: "All",
        rating: 4.0,
        deliveryTime: "20 mins"
    },
    {
        restaurantName: "Tandoori Nights",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 30,
        location: "Pune, Maharashtra",
        cuisineType: "Indian",
        rating: 4.6,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Sushi World",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 20,
        location: "Chennai, Tamil Nadu",
        cuisineType: "Japanese",
        rating: 4.9,
        deliveryTime: "45 mins"
    },
    {
        restaurantName: "Burger King",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 15,
        location: "Kolkata, West Bengal",
        cuisineType: "American",
        rating: 4.3,
        deliveryTime: "20 mins"
    },
    {
        restaurantName: "Pizza Palace",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 25,
        location: "Ahmedabad, Gujarat",
        cuisineType: "Italian",
        rating: 4.8,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Healthy Bites",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 10,
        location: "Jaipur, Rajasthan",
        cuisineType: "Healthy",
        rating: 4.5,
        deliveryTime: "25 mins"
    },
    {
        restaurantName: "Sweet Tooth",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 5,
        location: "Lucknow, Uttar Pradesh",
        cuisineType: "Desserts",
        rating: 4.7,
        deliveryTime: "15 mins"
    },
    {
        restaurantName: "Curry House",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 20,
        location: "Kochi, Kerala",
        cuisineType: "Indian",
        rating: 4.4,
        deliveryTime: "35 mins"
    },
    {
        restaurantName: "Taco Fiesta",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 15,
        location: "Indore, Madhya Pradesh",
        cuisineType: "Mexican",
        rating: 4.6,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Dim Sum Delight",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 25,
        location: "Surat, Gujarat",
        cuisineType: "Chinese",
        rating: 4.5,
        deliveryTime: "40 mins"
    },
    {
        restaurantName: "Grill House",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 10,
        location: "Nagpur, Maharashtra",
        cuisineType: "Grill",
        rating: 4.8,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Vegan Delights",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 5,
        location: "Vadodara, Gujarat",
        cuisineType: "Vegan",
        rating: 4.7,
        deliveryTime: "25 mins"
    },
    {
        restaurantName: "Pasta & Co.",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 20,
        location: "Goa",
        cuisineType: "Italian",
        rating: 4.6,
        deliveryTime: "35 mins"
    },
    {
        restaurantName: "Fish & Chips",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 15,
        location: "Vizag, Andhra Pradesh",
        cuisineType: "British",
        rating: 4.4,
        deliveryTime: "30 mins"
    },
    {
        restaurantName: "Kebab King",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 25,
        location: "Ludhiana, Punjab",
        cuisineType: "Middle Eastern",
        rating: 4.9,
        deliveryTime: "40 mins"
    },
    {
        restaurantName: "Bakery Bliss",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 10,
        location: "Amritsar, Punjab",
        cuisineType: "Bakery",
        rating: 4.5,
        deliveryTime: "15 mins"
    },
    {
        restaurantName: "Samosa Station",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 20,
        location: "Bhopal, Madhya Pradesh",
        cuisineType: "Indian",
        rating: 4.3,
        deliveryTime: "20 mins"
    },
    {
        restaurantName: "Chaat Corner",
        image: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 15,
        location: "Ranchi, Jharkhand",
        cuisineType: "Indian",
        rating: 4.6,
        deliveryTime: "15 mins"
    },
    {
        restaurantName: "Ice Cream Heaven",
        image: "https://plus.unsplash.com/premium_photo-1668146932661-2c7e3608ec51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        discount: 10,
        location: "Patna, Bihar",
        cuisineType: "Desserts",
        rating: 4.8,
        deliveryTime: "10 mins"
    }
];

    return(
       <div className="cardcontainer">
        {
            restaurants.map((resturant,index)=>{
                return(
                    <div className="cards" key={index}>
                        <div className="imagecontainer" key={index}>
                            <img src={resturant.image} alt={resturant.restaurantName} />
                            <span className="discount">{resturant.discount}% Off</span>
                        </div>
                        <div className="details">
                            <span className="name">Restaurant name:{resturant.restaurantName}</span>
                            <span className="location">Location:{resturant.location}<i className="ri-map-pin-line"></i></span>
                            <span className="cusine">CuisineType: {resturant.cuisineType}</span>
                            <span className="deliverytime">DeliveryTime:{resturant.deliveryTime}</span>
                            <span className="ratings">Ratings:<i className="ri-star-fill"></i>{resturant.rating}</span>
                        </div>
                    </div>
                )
           })
        }
    </div>
)
}


const ResturantBody=()=>{
    return (
        <div className="resturantbody">
               <SearchBar/>              
               <Cards className="cardcontainer"/>
        </div>
    );
}
// Footer
//details 
const Details =()=>{
    return(
        <div className="details">
            <h1> &copy;<span>all rights reserved</span></h1>
            <address>9th street,Marky Avenue ,Mumbai East ,India </address>
            <p>Email: <a href="mailto:support@foodapp.com">support@foodapp.com</a></p>
            <p>Phone: <a href="tel:+919876543210">+91-9876543210</a></p>
            <p>Follow us: 
                <a href="#"><i className="ri-facebook-circle-line"></i></a> | 
                <a href="#"><i className="ri-instagram-line"></i></a> | 
                <a href="#"><i className="ri-twitter-line"></i></a>
            </p>
        </div>

    );
}
//links 
const Links=()=>{
    const foodAppLinks = [
        "Home",
        "About Us",
        "Contact",
        "Restaurants",
        "Cuisines",
        "Offers",
        "Blog",
        "Careers",
        "Privacy Policy",
        "Terms & Conditions",
        "FAQs",
        "Delivery Partner",
        "Partner With Us",
        "Become a Merchant",
        "Gift Cards",
        "Corporate Gifting",
        "Sustainability",
        "Press",
        "Help Center",
        "Track Order"
    ];

    return(
        <div className="links">
                <ul>
                    {
                        foodAppLinks.map((links,index)=>{
                            return (
                                <li key={index}> <a href="#">{links}</a></li>
                            )
                        })
                    }
                </ul>

        </div>
    );
}
const Footer =()=>{
    return (
            <footer> 
                <Details/>
                <Links/>
            </footer>
    );
}

const AppLayOut = ()=>{
    return(
        
        <div className="applayout">
                <Heading/>
                <ResturantBody/>
                <Footer/>
        </div>
    );
}


root.render(<AppLayOut/>);
