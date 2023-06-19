import { createFeatureSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const productState=createFeatureSelector<ReadonlyArray<Product>>("products")
