// Write a POST api to create a product from the product details in request body.
// Write a POST api to create a user that takes user details from the request body. If the header isFreeAppUser 
// is not present terminate the request response cycle with an error message that the request is missing a mandatory
//  header. The value of field isFreeAppUser is determined by isFreeAppUser request header.
// Write a POST api for order purchase that takes a userId and a productId in request body. If the header 
// isFreeAppUser is not present terminate the request response cycle with an error message that the request is 
// missing a mandatory header If the header is present the control goes to the request handler. Perform the user 
//and 
// product validation. Check if the user exists as well as whether the product exists. Return an error with a 
//suitable
// error message if either of these validations fail For every purchase we save an order document in the orders
// collection. isFreeAppUser property in an Order document depends on the header isFreeAppUser. If the isFreeAppUser
// header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the
// attribute in order isFreeAppUser is set to true. If this header has a 
//false value then the product’s price is checked. This value is deducted from the user’s balance and the order
// amount is set to the product’s price as well as the attrbiute isFreeAppUser is set to false in order document.
//  Update the logic in middleware to set the isFreeAppUser attribute in req. Use this attribute in the route 
// handler for setting the isFreeAppUser attributes of User and Order collection.

export const createproduct= async()=>{
    try {
        let data= req.body;
        let newuser = userModel.create(data);
        res.status(200).json({message:newuser})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
