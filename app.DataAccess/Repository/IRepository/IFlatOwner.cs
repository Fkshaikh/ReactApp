using app.Models;

namespace app.DataAccess.Repository.IRepository;

public interface IFlatOwner :IRepository<FlatOwner>
{
    void Update(FlatOwnerRepository flatOwnerRepository);
    
}