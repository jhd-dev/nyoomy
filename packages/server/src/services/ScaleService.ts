import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Scale } from '../entities';
import type { UpdateScaleEntryInput } from '../types/inputs/UpdateScaleEntryInput';
import type { ScaleResponse } from '../types/responses/ScaleResponse';

@Service()
export class ScaleService {
    @InjectRepository(Scale)
    private readonly scaleRepo: Repository<Scale>;

    public getAllScales(excludingArchived: boolean): Promise<Scale[]> {
        return this.scaleRepo.find({
            where: { isArchived: excludingArchived ? false : undefined },
        });
    }

    public getUserScales(
        userId: string,
        excludingArchived: boolean
    ): Promise<Scale[]> {
        return this.scaleRepo.find({
            where: {
                user: { id: userId },
                isArchived: excludingArchived ? false : undefined,
            },
            relations: ['user', 'user.id'],
        });
    }

    public async addScale(userId: string): Promise<Scale> {
        const metric = { user: { id: userId } };
        const scale = this.scaleRepo.create({ metric });
        await this.scaleRepo.save(scale);
        return scale;
    }

    public async updateScale(
        updateInput: UpdateScaleEntryInput
    ): Promise<ScaleResponse> {
        const scale = await this.scaleRepo.findOneOrFail(updateInput.id);
        await this.scaleRepo.update(scale, updateInput);
        return this.scaleRepo.findOneOrFail(updateInput.id);
    }

    public async deleteScale(id: string): Promise<void> {
        const scale = await this.scaleRepo.findOneOrFail(id);
        await this.scaleRepo.remove(scale);
    }
}
