export interface HeaderDetailsProps {
  title: string;
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
}