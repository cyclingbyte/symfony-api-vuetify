<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Stuff;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Uid\Uuid;

final class Test extends AbstractController {
  public function __construct(
    private EntityManagerInterface $entityManager
  ) {
  }

  #[Route(
    path: '/api/test',
    name: 'api.test',
    methods: ['GET'],
  )]
  public function test(): JsonResponse {
    $data = [];
    $entities = $this->entityManager->getRepository(Stuff::class)->findAll();

    foreach ($entities as $stuff) {
      $data[] = [
        $stuff->id => $stuff->stuff
      ];
    }

    return new JsonResponse($data);
  }

  #[Route(
    path: '/api/create',
    name: 'api.create',
    methods: ['POST']
  )]
  public function createStuff(Request $request): Response {
    $body = \json_decode(
      $request->getContent(),
      true,
      512,
      JSON_THROW_ON_ERROR
    )['body'] ?? '';

    $content = \json_decode($body, true, 512, JSON_THROW_ON_ERROR)['content'] ?? '';

    $this->entityManager->persist($this->generateStuff($content));
    $this->entityManager->flush();

    return new Response();
  }

  private function generateStuff(string $content): Stuff {
    $stuff = new Stuff();
    $stuff->id = \hex2bin(\str_replace('-', '', (string) Uuid::v4()));
    $stuff->stuff = $content;

    return $stuff;
  }
}
