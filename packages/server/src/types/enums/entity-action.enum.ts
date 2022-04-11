enum EntityAction {
    MANAGE = 'manage',
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete',
}

export default EntityAction;

export const entityActions = [
    EntityAction.MANAGE,
    EntityAction.CREATE,
    EntityAction.READ,
    EntityAction.UPDATE,
    EntityAction.DELETE,
];
