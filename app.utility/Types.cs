using app.Models;

namespace app.utility;


public class RegisterOwnerDto
{
    public string Name { get; set; }
    public string FlatNumber { get; set; }
    public string PhoneNumber { get; set; }
    public string Password { get; set; }
}
public class LoginDto
{
    public string PhoneNumber { get; set; }
    public string Password { get; set; }
}

public class RegisterPrevisitorDto
{
    public string Name { get; set; }
    public string PhoneNumber { get; set; }
    public string FlatOwnerID { get; set; }

}

public class QRCreationData
{
    public string Name { get; set; }
    public string PhoneNumber { get; set; }
    public FlatOwner FlatOwner { get; set; }
}