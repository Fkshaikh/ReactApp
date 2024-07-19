using app.DataAccess.Data;
using app.DataAccess.Repository.IRepository;
using app.Models;

namespace app.DataAccess.Repository;

public class PreVisitorReposiotry(ApplicationDbContext db) : Repository<PreVisitor>(db), IPrevisitor
{
    public void Update(PreVisitor preVisitor)
    {
        throw new NotImplementedException();
    }
}