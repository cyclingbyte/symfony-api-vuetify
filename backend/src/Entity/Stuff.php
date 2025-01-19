<?php

declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\HasLifecycleCallbacks;
use Doctrine\ORM\Mapping\Id;
use Doctrine\ORM\Mapping\PrePersist;
use Doctrine\ORM\Mapping\PreUpdate;
use Doctrine\ORM\Mapping\Table;

use ApiPlatform\Metadata\ApiResource;


#[Entity]
#[Table(name: 'stuff')]
#[HasLifecycleCallbacks]
#[ApiResource]
final class Stuff {
  public const ENTITY_NAME = 'stuff';

  #[Id]
  #[Column(type: 'uuid', unique: true)]
  public string $id;

  #[Column(type: 'string', length: 255)]
  public string $stuff;

  #[Column(type: 'datetime_immutable')]
  public \DateTimeImmutable $createdAt;

  #[Column(type: 'datetime_immutable', nullable: true)]
  public ?\DateTimeImmutable $updatedAt;

  #[PrePersist]
  public function onPrePersist() {
    $this->createdAt = new \DateTimeImmutable("now");
  }

  #[PreUpdate]
  public function onPreUpdate() {
    $this->updatedAt = new \DateTimeImmutable("now");
  }
}
