using System.ComponentModel.DataAnnotations.Schema;

namespace app.Models;

public class PreVisitor
{
    
    
    public int Id { get; set; }
    public string Name { get; set; }
    public int FlatOwnerId { get; set; }
    public string PhoneNumber { get; set; }
    public string UniqueQR { get; set; }
    
    public byte[]? Photo { get; set; }
    
    [ForeignKey("FlatOwnerId")]  
    public FlatOwner? FlatOwner { get; set; }
    
    
    
}