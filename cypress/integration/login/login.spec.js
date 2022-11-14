import { Login } from "../pages/login";
import{Dashbord} from "../pages/dashbord";

describe('Verify the  login funtionality on SWAGELAB site',function(){
    let login =new Login
    let dash = new Dashbord

   this.beforeEach(function(){
    login.navigate()
   })
    
    it('Verify the login page with valid craedtial',function(){

      
        login.login()
        login.dashbord()

    })
    it('Verify the login page with Invalid craedtial',function(){

        
        login.inValidlogin()
        login.erroMessge()

    })
    it('Verify the login page with Invalid craedtial',function(){

        
        login.inValidlogin()
        login.erroMessge()

    })
    it('Calculate the numbetr of Product',function(){

        
        login.login()
        dash.listofProduct()
    })
    it.only('addition of price of Product',function(){

        
        login.login()
        dash.addingPrice()
    })

})