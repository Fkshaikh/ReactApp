using app.DataAccess.Data;
using app.DataAccess.Repository.IRepository;

namespace app.DataAccess.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _db;
    public IFlatOwner FlatOwner { get; private set; }
    public IPrevisitor PreVisitor { get; }

    public UnitOfWork(ApplicationDbContext db)
    {
        _db = db;
        PreVisitor = new PreVisitorReposiotry(_db);
        FlatOwner = new FlatOwnerRepository(_db);
    }

    public void Save()
    {
        _db.SaveChanges();
    }

    public void Dispose()
    {
        _db.Dispose();
    }
}