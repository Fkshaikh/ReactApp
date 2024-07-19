using app.DataAccess.Repository.IRepository;

namespace app.DataAccess.Repository.IRepository;

public interface IUnitOfWork : IDisposable
{
    IFlatOwner FlatOwner { get; }
    IPrevisitor PreVisitor { get; }
    void Save();
    
}