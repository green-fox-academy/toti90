'use strict';

import{Flower} from './flower'
import{Tree} from './tree'
import { Plant } from './plant';
import { Garden } from './garden';

let garden = new Garden();
garden.addPlant(new Flower('yellow'));
garden.addPlant(new Flower('white'));
garden.addPlant(new Tree('blue'));
garden.addPlant(new Tree('purple'));
garden.print()
garden.waterPlants(10)
garden.print()
garden.waterPlants(30)
garden.print()
garden.waterPlants(70)
garden.print()

