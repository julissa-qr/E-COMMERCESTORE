namespace API.Entities
{
    public class BasketItem
    {   //one to one relationship
        public int Id { get; set; }
        public int Quantity { get; set; }

        //nav properties
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}