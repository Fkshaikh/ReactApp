

using app.Models;

namespace app.DataAccess.Repository.IRepository;

public interface IPrevisitor: IRepository<PreVisitor>
{
    void Update(PreVisitor preVisitor);
}