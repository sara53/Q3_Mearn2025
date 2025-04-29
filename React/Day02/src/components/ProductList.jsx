import { Table } from "react-bootstrap";

export function ProductList( props ) {

    let { products, onRemoveProduct } = props;
    let deleteHandler = ( productId ) => {

        onRemoveProduct( productId )
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-muted text-decoration-underline">Product Data</h2>
            {products.length != 0 && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map( ( product, index ) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteHandler( index )}>Remove Product</button>
                            </td>
                        </tr> )}
                    </tbody>
                </Table>
            )}
        </div>
    )
}
