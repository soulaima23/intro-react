import { Table } from "react-bootstrap";

const ProductList = () => {
    const Products = [
        {
            imgSrc:"https://www.diamant-gems.com/wp-content/uploads/2015/06/Karat.15.jpg",
            name:"pendentif solitaire",
            price:`450.00 €`,
        },
        {
            imgSrc:"https://diamantaire-paris.com/wp-content/uploads/2021/01/Bague-diamant-poire-3.03cts-ESI2-certficat-GIA.jpg",
            name:"bague",
            price:`850.00 €`,
        },
        {
            imgSrc:"https://bellini.fr/wp-content/uploads/2020/11/Bellini14119-bague-diamant-002.2281.jpg",
            name:"bague solitaire",
            price:`1450.00 €`,
        },
        {
            imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQnNf6ZO3ZaxNHj0VSCRY1FVNJVCkeN2OmA&usqp=CAU",
            name:"colier ",
            price:`850.00 €`,
        },
    ];
   
    return (
        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th> Name</th>
                    <th>imagSrc</th>
                    <th>price</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                                Products.map(Product => (
                                        <tr>
                                            <td>{Product.name}</td>
                                            <td> <img src={Product.imgSrc} alt=""  height="150px" width="150px"/> </td>
                                            <td>{Product.price}</td>
                                        </tr>
                                ))
                                }
                        

                    </tbody>
        </Table>
    );
};

export default ProductList ;
