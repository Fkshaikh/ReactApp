using app.DataAccess.Data;
using app.DataAccess.Repository.IRepository;
using Microsoft.EntityFrameworkCore;

namespace app.DataAccess.Repository;

public class Repository<T>(ApplicationDbContext db): IRepository<T>
    where T : class 
{
 
    private readonly DbSet<T> _dbSet = db.Set<T>();


    public IEnumerable<T> GetAll()
    {
        IQueryable<T> query = _dbSet;
        return query.ToList();
    }

    public T Get(int id)
    {
        var data = _dbSet.Find(id);
        if (data == null)
            throw new Exception("Data not found");
        return data;
    }

    public void Add(T entity)
    {
        _dbSet.Add(entity);
    }

    public void Remove(T entity)
    {
        throw new NotImplementedException();
    }
}