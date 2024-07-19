using app.DataAccess.Data;
using app.DataAccess.Repository.IRepository;
using app.Models;

namespace app.DataAccess.Repository;

public class FlatOwnerRepository(ApplicationDbContext db): Repository<FlatOwner>(db), IFlatOwner
{
    public void Update(FlatOwnerRepository flatOwnerRepository)
    {
        throw new NotImplementedException();
    }
}