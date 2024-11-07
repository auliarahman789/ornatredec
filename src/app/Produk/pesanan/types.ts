export type Subvariasi = {
    id: number;
    id_produk: number;
    id_variasi: number;
    foto_variasi: string | null;
    nama_sub_variasi: string;
    stok: number;
    usia: string;
    harga: number;
    createdAt: string;
    updatedAt: string;
  };
  
  export type Variasi = {
    id: number;
    id_produk: number;
    foto_variasi: string;
    nama_variasi: string;
    subvariasis: Subvariasi[];
    createdAt: string;
    updatedAt: string;
  };
  
  export type Produk = {
    id: number;
    judul_produk: string;
    deskripsi_produk: string;
    foto_produk: string;
    variasiDipilih?: string;
    harga: number;
    jumlah?: number;
    kategori_produk: string;
    variasis: Variasi[];
    createdAt: string;
    updatedAt: string;
  };

  export type KeranjangItem = Produk & {
    jumlah: number;
    variasiDipilih?: string;
    subvariasiDipilih?: string;
  };

 
  