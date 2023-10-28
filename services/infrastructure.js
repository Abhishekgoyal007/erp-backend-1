import Infrastructure from "#models/infrastructure";
import databaseError from "#error/database";

export async function createInfrastructure(
  name,
  type,
  wing,
  floor,
  capacity,
  organization,
) {
  const newInfrastructure = await Infrastructure.create({
    name,
    type,
    wing,
    floor,
    capacity,
    organization,
  });
  if (newInfrastructure.name === name) {
    return newInfrastructure;
  }
  throw new databaseError.DataEntryError("infrastructure");
}

export async function updateInfrastructureById(id, data) {
  const updated = await Infrastructure.update({ _id: id }, data);
  if (updated) {
    return updated;
  }
  throw new databaseError.DataEntryError("Infrastructure");
}

export async function infrastructureList(filter, limit, page) {
  const infralist = await Infrastructure.read(filter, limit, page);
  return infralist;
}

export async function deleteInfrastructureById(infrastructureId) {
  const deleted = await Infrastructure.remove({ _id: infrastructureId });
  if (deleted) {
    return deleted;
  }
  throw new databaseError.DataDeleteError("infrastructure");
}
